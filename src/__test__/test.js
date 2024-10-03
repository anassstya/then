import { GameSavingLoader } from "../main";

test('should return parsed data', async () => {
  const result = new GameSavingLoader();
  const data = await result.load();
  expect(data).toEqual('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}')
})

test('should return an error', async () => {
  function json(data) {
    return new Promise((resolve, reject) => {
      // эмуляция обработки ArrayBuffer
      setTimeout(() => {
        reject(String.fromCharCode.apply(null, new Uint16Array(data)));
      }, 500);
    });
  }

  class GameSavingLoader {
    async load() {
      try {
        const response = await read();
        const saving = await json(response);
        return saving;  
      } catch (error) {
        throw new Error('oops');
      }
    }
  }
  let result = new GameSavingLoader()
  await expect(result.load()).rejects.toThrow('oops');

});
