import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
  ApiBearerAuth,
  ApiNotFoundResponse,
} from '@nestjs/swagger';

export function ApiDocGenericPatch(
  value: string,
  modelType: any,
  modelResponse?: any,
) {
  return applyDecorators(
    ApiOperation({ summary: `Update the ${value} by id` }),
    ApiBody({ type: modelType }),
    ApiOkResponse({
      description: `Data from ${value} requested`,
      type: modelResponse,
    }),
    ApiBadRequestResponse({ description: 'Bad Request' }),
    ApiNotFoundResponse({
      description: `The ${value} not found`,
    }),
    ApiForbiddenResponse({ description: 'Access Denied.' }),
    ApiBearerAuth('JWT'),
  );
}
