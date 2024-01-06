const clients = [];

onconnect = (e) => {
  const port = e.ports[0];
  clients.push(port);

  // Lắng nghe thông điệp từ một tab và chuyển tiếp đến SharedWorker
  port.onmessage = (event) => {
    const rotationData = event.data;
    broadcastRotation(rotationData);
  };

  // Gửi thông điệp tới một tab cụ thể
  const sendRotationToTab = (rotationData, targetPort) => {
    targetPort.postMessage(rotationData);
  };

  const broadcastRotation = (rotationData) => {
    clients.forEach(client => {
      sendRotationToTab(rotationData, client);
    });
  };
};
