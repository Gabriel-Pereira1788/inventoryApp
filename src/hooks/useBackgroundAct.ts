import {useCallback, useEffect} from 'react';
import BackgroundService, {
  BackgroundTaskOptions,
} from 'react-native-background-actions';

const sleep = (time: number) =>
  new Promise(resolve => setTimeout(() => resolve(1), time));

export function useBackgroundAct() {
  const veryIntensiveTask = async (taskDataArguments: any) => {
    // Example of an infinite loop task
    const {delay} = taskDataArguments;
    console.log(BackgroundService.isRunning());
    await new Promise(async resolve => {
      for (let i = 0; BackgroundService.isRunning(); i++) {
        console.log(i);
        await BackgroundService.updateNotification({
          taskTitle: 'task' + i,
        });

        await sleep(delay);
      }
    });
  };

  const initBackgroundService = useCallback(async () => {
    const options = {
      taskName: 'Example',
      taskTitle: 'ExampleTask title',
      taskDesc: 'ExampleTask description',
      taskIcon: {
        name: 'ic_launcher',
        type: 'mipmap',
      },
      color: '#ff00ff',
      parameters: {
        delay: 5000,
      }, // See Deep Linking for more info
    };

    await BackgroundService.start(veryIntensiveTask, options);
    // Only Android, iOS will ignore this call
    // iOS will also run everything here in the background until .stop() is called
  }, []);

  useEffect(() => {
    initBackgroundService();
  }, [initBackgroundService]);
}
