import { responseBuilder } from "src/utils/responseBuilder";
import { Handler } from "aws-lambda";
import {Response } from "src/types/eventTypes";
import {Request } from "src/types/eventTypes";

export const handler = async (event) => {
    const response = {myRequest: event}
    await setTimeout(() => console.log(event), 1000);
    return responseBuilder.buildResponse(200, response);
    }