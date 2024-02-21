import SmartToyIcon from "@mui/icons-material/SmartToy";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import SendIcon from '@mui/icons-material/Send';

type Inputs = {
  prompt: string;
};

type Data = {
    content: string
}

export default function MainSection() {
  const [messages, setMessages] = useState([
    "Hello! Welcome to the ChatGPT mock project.",
  ]);

//   const [userMessages, setUserMessages] = useState([])

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) =>
    await axios
      .post("http://127.0.0.1:3000/prompt", data)
      .then(function (response) {
        setMessages(prevMessages => [response.data, ...prevMessages])
      })
      .catch(function (error) {
        console.error(error);
      });

//   useEffect(() => {
//       const interval = setInterval(() => {
//         const newMessage = `New message ${messages.length + 1}`;
//         setMessages(prevMessages => [newMessage, ...prevMessages]);
//       }, 2000);

//       return () => clearInterval(interval);
//     }, [messages]);

  return (
    <div>
      <div className="h-screen relative justify-center flex">
        <div className="absolute bottom-12  w-5/6 h-5/6 m-7 flex flex-col-reverse overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className="flex gap-7 items-center my-3">
              <SmartToyIcon fontSize="large" />
              <div className="border-indigo-500 border-2 rounded w-full h-full p-4 items-center flex">
                <span className="text-center w-full">{message}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" border-t-2 border-y-indigo-100 flex justify-center h-28 w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="flex items-center w-5/6 py-7">
          <div className="p-2 w-full">
            <TextField fullWidth className="h-full" {...register("prompt")} />
          </div>
          <Button variant="outlined" className="h-full" type="submit">
            <SendIcon />
          </Button>
        </form>
      </div>
    </div>
  );
}