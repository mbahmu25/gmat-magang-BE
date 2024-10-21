const main = async () => {
  const tambah = await fetch("http://localhost:3000/tambah", {
    method: "post",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ a: 8, b: 2 }),
  });
  const tambahYangUdahJson = await tambah.json();

  console.log(tambahYangUdahJson);
};

main();
