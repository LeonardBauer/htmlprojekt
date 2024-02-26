import { writable } from 'svelte/store';

function createTitle() {
    const {subscribe, set, update} = writable('');

    return {
        subscribe,
        set: (value) => {
            set(`${value} • Leonard Bauer`)
        },
        clear: () => {
            set('Leonard Bauer • Home');
        }
    }
}

export const title = createTitle();