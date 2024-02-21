import { TextField, Button } from "@mui/material"

export default function TextPrompt () {
    return (
        <div className="bg-orange-50 flex justify-center h-28">
            <form action="" className="flex items-center">
                <div className="p-2">
                    <TextField className="w-full"/>
                </div>
                <Button variant="outlined" type="submit">
                    Enviar
                </Button>
            </form>
        </div>
    )
}