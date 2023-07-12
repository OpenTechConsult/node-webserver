const target = new EventTarget();

target.addEventListener('customEvent', (event) => {
    console.log(`${event.type} was triggered`);
    // Output: customEvent was triggered
});

const event = new Event('customEvent');

target.dispatchEvent(event);