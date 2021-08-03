import { Appwrite } from "appwrite";

const APP_ENDPOINT = "https://appwrite-endpoint.com/v1";
const APP_PROJECT = "PROJECT_ID";

const SDK = new Appwrite();

SDK.setEndpoint(APP_ENDPOINT).setProject(APP_PROJECT);

export const cloud = SDK;