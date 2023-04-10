// Next.js API route that uses Langchain with ChatGPT to generate a response to a user's message(s)

import { ChatOpenAI } from "langchain/chat_models";
import { initializeAgentExecutor } from "langchain/agents";
import {
    HumanChatMessage,
    SystemChatMessage,
    AIChatMessage,
} from "langchain/schema";
import injectIntoBasePrompt from "util/injectIntoBasePrompt";
import { DynamicTool } from "langchain/tools";
import { BufferMemory } from "langchain/memory";

export default async function handler(req, res) {
    process.env.LANGCHAIN_HANDLER = "langchain";
    const { messages, prompt } = req.body;
    if (!messages || !prompt) {
        res.status(400).json({ error: "Missing messages or prompt" });
        return;
    }

    // Set up the Agent.
    const model = new ChatOpenAI({ modelName: "gpt-3.5-turbo" });
    const tools = [
        // new DynamicTool({
        //     name: "Summarize and post to submissions",
        //     description: `Call this when the interview has clearly completed. This can be
        //         after you ask whether the human wants to continue and they no, or after
        //         a certain number of questions have been asked.
        //         First summarize the interview concisely, then pass the summary as a String 
        //         to this function. The function itself will post the summary to the 
        //         submissions table in the database for this particular Deepform, and 
        //         return a success or error message as a String.`,
        //     func: (summary) => {
        //         console.log(
        //             "Hello from the Summarize and post to submissions tool! Summary:",
        //             summary
        //         );
        //         return "Success!";
        //     },
        // }),
    ];

    const executor = await initializeAgentExecutor(
        tools,
        model,
        "chat-conversational-react-description",
        true
    );

    executor.memory = new BufferMemory({
        returnMessages: true,
        memoryKey: "chat_history",
        inputKey: "input",
    });

    // Process the messages and prompt.
    let fullPrompt = injectIntoBasePrompt(prompt);
    // The messages arrive to this with this shape: { message: "Hello", sender: "human" }
    // I want to build up a String that has this format so the AI can process it in one string:
    // `<sender>: <message>, <sender>: <message>, ...`
    let messagesString = "";
    // First, add the first message from the human to be the fullPrompt.
    messagesString += `Human: <${fullPrompt}>, `;
    for (let i = 0; i < messages.length; i++) {
        const message = messages[i];
        messagesString += `${message.sender}: <${message.message}>, `;
    }

    console.log("messagesString:", messagesString);

    const result = await executor.call({ input: messagesString });
    console.log("Got result: ", result);
    res.status(200).json({ text: result.output });
}
