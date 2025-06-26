import messageModels from "../models/message.models.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const sender = req.user.id;
    const { receiver } = req.params;
    const newMessage = await messageModels.create({
      sender,
      receiver,
      message,
    });

    res.status(201).json(newMessage);
  } catch (error) {
    console.error("Error in sendMessage controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const sender = req.user.id;
    const { receiver } = req.params;

    const message = await messageModels.find({
      $or: [
        { sender, receiver },
        {
          receiver,
          sender,
        },
      ],
    });

    res.status(200).json(message);
  } catch (error) {
    console.error("Error in getMessage controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
