using System;
using Microsoft.Extensions.Hosting;
using System.Threading;
using System.Threading.Tasks;

namespace Core.Services
{
    public class RabbitMQConsumerHostedService : IHostedService
    {
        private readonly RabbitMQConsumer _consumer;

        public RabbitMQConsumerHostedService()
        {
            _consumer = new RabbitMQConsumer();
        }

        public Task StartAsync(CancellationToken cancellationToken)
        {
            Task.Run(() =>
            {
                _consumer.StartListening(); // Start listening synchronously
            }, cancellationToken);

            return Task.CompletedTask;
        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            // Add logic to clean up the consumer if needed
            Console.WriteLine("Stopping RabbitMQ Listener...");
            return Task.CompletedTask;
        }
    }
}
