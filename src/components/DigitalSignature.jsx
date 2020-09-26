import React, { useRef } from "react"
import SignatureCanvas from "react-signature-canvas";

const DogotalSignature = () => {
  const signatureRef = useRef({});
  return <SignatureCanvas
    canvasProps={{
      width: 500,
      height: 400,
      style: { border: "1px solid #000000" }
    }
    }
    minWidth={2}
    maxWidth={3}
    penColor="green"
    ref={signatureRef}
    onEnd={() => (
      console.log(signatureRef.current.getTrimmedCanvas().toDataURL("image / jpg")))}
  />
}
export default DogotalSignature