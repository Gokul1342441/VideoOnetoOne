// room.js
import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import './room.css'


const Room = () => {
  const { roomId } = useParams();
  const meetingRef = useRef(null);

  useEffect(() => {
      const joinRoom = async (element) => {
      const appID = 50021309;
      const serverSecret = "c61c8f41e38bf37158b177d967de7ad1";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        Date.now().toString(),
        "User"
      );
      const zc = ZegoUIKitPrebuilt.create(kitToken);
      zc.joinRoom({
        container: element,
        sharedLinks: [
            {
              name: 'Personal link',
              url: `https://example.com/room/${roomId}`,
            },
          ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
        showScreenSharingButton: false,
      });
    };

    if (meetingRef.current) {
      joinRoom(meetingRef.current);
    }
  }, [roomId]);

  return (
    <body id="body" data-theme="light">
        

    <div id="contain">
      <div id="meetcontain" ref={meetingRef} />
    </div>
    </body>
  );
};

export default Room;
