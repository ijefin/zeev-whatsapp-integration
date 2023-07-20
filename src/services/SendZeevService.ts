import Sender from "../Sender";

export class SendNewZeev {
  async execute({ title, userId }) {
    const repository = new TaskManager();

    const newTask = await repository.createNewTask(name, description);

    await taskRepository.save(newTask);

    return newTask;
  }
}
