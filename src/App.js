import React, { useState } from "react";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import SignIn from "./comps/signIn";
import { useAuthState } from "react-firebase-hooks/auth";
import { projectAuth, provider } from "./firebase/config";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [user] = useAuthState(projectAuth);

  return (
    <div className="App">
      {user ? (
        <>
          <Title auth={projectAuth} />
          <UploadForm uid={user.uid} />
          <ImageGrid uid={user.uid} setSelectedImg={setSelectedImg} />
          {selectedImg && (
            <Modal setSelectedImg={setSelectedImg} selectedImg={selectedImg} />
          )}
        </>
      ) : (
        <SignIn auth={projectAuth} provider={provider} />
      )}
    </div>
  );
}

export default App;
