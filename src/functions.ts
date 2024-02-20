// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as EnxRtc from "./EnxRtc.js"
import { ConstraintsProps } from "./types.js"



export function connect(authToken: string, { audio, video }: ConstraintsProps) {
    var initOpt = { "token": "XXX" };
    var room = EnxRtc.EnxRoom(initOpt); // Initiates Room

    var reConnectOpt = {
        "allow_reconnect": true,
        "number_of_attempts": 3,
        "timeout_interval": 10000
    };

    room.connect(reConnectOpt);


    console.log('connected..')
}
