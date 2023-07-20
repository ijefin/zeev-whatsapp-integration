import { create, Whatsapp } from "venom-bot";

class Sender {
  private client!: Whatsapp;

  constructor() {
    this.initialize();
  }

  private initialize() {
    const qrCodeCallback = (base64Qrimg: string) => {
      console.log("QR Code:", base64Qrimg);
    };

    const statusCallback = (statusSession: string) => {
      console.log("Status:", statusSession);
    };

    const start = (client: Whatsapp) => {
      this.client = client;

      // Enviar uma mensagem
      // this.sendMessage(
      //   "5531993678691@c.us",
      //   "Olá, isso é uma mensagem de teste via integração!"
      // );
    };

    create("sessionName", qrCodeCallback, statusCallback)
      .then((client) => start(client))
      .catch((error) => console.error(error));
  }

  public sendMessage(contactNumber: string, message: string) {
    this.client
      .sendText(contactNumber, message)
      .then((response) => {
        console.log("Mensagem enviada:", response);
      })
      .catch((error) => {
        console.error("Erro ao enviar mensagem:", error);
      });
  }
}

export default Sender;
