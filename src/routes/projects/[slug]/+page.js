import { error } from '@sveltejs/kit';
import projects from "./projects.json";

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    if (projects[params.slug] ) {
        return projects[params.slug];
    }

    error(404, 'Not found');
}