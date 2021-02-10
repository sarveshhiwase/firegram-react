import React, { useState } from "react";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import SignIn from "./comps/signIn";
import { useAuthState } from "react-firebase-hooks/auth";
import { projectAuth, provider } from "./firebase/config";
import LinearProgress from '@material-ui/core/LinearProgress'

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [user] = useAuthState(projectAuth);
  const [loading,setLoading] = useState(false);

  return (
    <div className="App">
     
      {user ? (
        <>
          <Title setLoading={setLoading} auth={projectAuth} />
          <UploadForm uid={user.uid} />
          <ImageGrid uid={user.uid} setSelectedImg={setSelectedImg} />
          {selectedImg && (
            <Modal setSelectedImg={setSelectedImg} selectedImg={selectedImg} />
          )}
        </>
      ) : (
        <>
        {loading && <LinearProgress/> }
      
        <SignIn setLoading={setLoading} auth={projectAuth} provider={provider} />
        </>
      )}
    </div>
  );
}

export default App;
