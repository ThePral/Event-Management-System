using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using System.Text;
using System.Text.Json;

namespace Core.Services
{
    public class RabbitMQConsumer
    {
        private readonly string _hostName = "localhost";
        private readonly string _exchangeName = "UserExchange";
        private readonly string _queueName = "CoreQueue";

        public void StartListening()
        {
            var factory = new ConnectionFactory() { HostName = _hostName };

            using var connection = factory.CreateConnection();
            using var channel = connection.CreateModel();

            channel.ExchangeDeclare(exchange: _exchangeName, type: "topic");
            channel.QueueDeclare(queue: _queueName, durable: false, exclusive: false, autoDelete: false, arguments: null);
            channel.QueueBind(queue: _queueName, exchange: _exchangeName, routingKey: "user.login");

            var consumer = new EventingBasicConsumer(channel);

            consumer.Received += (model, ea) =>
            {
                var body = ea.Body.ToArray();
                var message = Encoding.UTF8.GetString(body);

                var userEvent = JsonSerializer.Deserialize<UserEvent>(message);
                Console.WriteLine($"Received message: {message}");

                // Process the message (e.g., store user info, handle session, etc.)
            };

            channel.BasicConsume(queue: _queueName, autoAck: true, consumer: consumer);

            Console.WriteLine("Listening for messages on RabbitMQ...");
            Console.ReadLine(); // Keeps the listener running
        }
    }

    public class UserEvent
    {
        public int UserId { get; set; }
        public string? Email { get; set; }
        public string? Action { get; set; }
    }
}