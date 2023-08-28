import { create, Whatsapp } from "venom-bot";

export default class WhatsappService {
  private client!: Whatsapp;

  constructor() {
    this.initialize();
  }

  async sendText(to: string, body: string) {
    await this.client.sendText(to, body);
  }

  private initialize() {
    const qr = (base64QrImg: string) => {
      // Aqui você pode exibir o QR code para o usuário, por exemplo:
      console.log("Escaneie o QR code para iniciar a sessão:", base64QrImg);
    };

    const status = (statusSession: string) => {
      return statusSession;
    };

    const start = (client: Whatsapp) => {
      this.client = client;

      // Agora que o cliente está inicializado, você pode chamar suas ações necessárias aqui.
      // Por exemplo:
      // this.sendText("553192310461@c.us", "Olá Roberto! O código de confirmação é: *512455*");
    };

    // Tentar criar o cliente
    const initializeClient = () => {
      create("Zeev Notificator", qr, status)
        .then((client: any) => start(client))
        .catch((err: any) => {
          console.error("Erro ao criar o cliente:", err);
          console.log("Tentando reiniciar...");
          initializeClient(); // Tentar criar novamente em caso de erro
        });
    };

    initializeClient(); // Iniciar o processo de criação do cliente
  }
}