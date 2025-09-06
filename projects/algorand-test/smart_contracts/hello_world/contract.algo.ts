import { Contract, GlobalState } from "@algorandfoundation/algorand-typescript";

export class DigitalSignatureStorage extends Contract {

  // Store a signature in global state
  signature = GlobalState<string>({
    key: "signature",
    initialValue: "",
  });

  // Store the signer (address)
  signer = GlobalState<string>({
    key: "signer",
    initialValue: "",
  });

  /**
   * Save a digital signature with the signer's address
   * @param signerAddress Address of the person signing
   * @param signatureData Digital signature string (e.g., hash of document)
   * @returns The stored signature
   */
  storeSignature(signerAddress: string, signatureData: string): string {
    this.signer.value = signerAddress;
    this.signature.value = signatureData;
    return signatureData;
  }

  /**
   * Retrieve the stored signature
   * @returns The stored signature
   */
  getSignature(): string {
    return this.signature.value;
  }

  /**
   * Retrieve the signer’s address
   * @returns The signer address
   */
  getSigner(): string {
    return this.signer.value;
  }
}

