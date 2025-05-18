/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\nquery Media($mediaId: Int) {\n  Media(id: $mediaId) {\n      id\n      title {\n        english\n        native\n      }\n      description\n      genres\n      isAdult\n      meanScore\n      startDate {\n        year\n        month\n        day\n      }\n      endDate {\n        year\n        month\n        day\n      }\n      type\n      coverImage {\n        color\n        extraLarge\n      }\n      bannerImage\n  }\n}\n": typeof types.MediaDocument,
    "\nquery PagedMedia($page: Int, $perPage: Int, $search: String, $sort: [MediaSort]) {\n  Page(page: $page, perPage: $perPage) {\n    pageInfo {\n      currentPage\n      hasNextPage\n      total\n      perPage\n      lastPage\n    }\n    media(sort: $sort, search: $search) {\n      id\n      title {\n        english\n        native\n      }\n      description\n      genres\n      isAdult\n      meanScore\n      startDate {\n        year\n        month\n        day\n      }\n      endDate {\n        year\n        month\n        day\n      }\n      type\n      coverImage {\n        color\n        extraLarge\n      }\n      bannerImage\n    }\n  }\n}\n": typeof types.PagedMediaDocument,
};
const documents: Documents = {
    "\nquery Media($mediaId: Int) {\n  Media(id: $mediaId) {\n      id\n      title {\n        english\n        native\n      }\n      description\n      genres\n      isAdult\n      meanScore\n      startDate {\n        year\n        month\n        day\n      }\n      endDate {\n        year\n        month\n        day\n      }\n      type\n      coverImage {\n        color\n        extraLarge\n      }\n      bannerImage\n  }\n}\n": types.MediaDocument,
    "\nquery PagedMedia($page: Int, $perPage: Int, $search: String, $sort: [MediaSort]) {\n  Page(page: $page, perPage: $perPage) {\n    pageInfo {\n      currentPage\n      hasNextPage\n      total\n      perPage\n      lastPage\n    }\n    media(sort: $sort, search: $search) {\n      id\n      title {\n        english\n        native\n      }\n      description\n      genres\n      isAdult\n      meanScore\n      startDate {\n        year\n        month\n        day\n      }\n      endDate {\n        year\n        month\n        day\n      }\n      type\n      coverImage {\n        color\n        extraLarge\n      }\n      bannerImage\n    }\n  }\n}\n": types.PagedMediaDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Media($mediaId: Int) {\n  Media(id: $mediaId) {\n      id\n      title {\n        english\n        native\n      }\n      description\n      genres\n      isAdult\n      meanScore\n      startDate {\n        year\n        month\n        day\n      }\n      endDate {\n        year\n        month\n        day\n      }\n      type\n      coverImage {\n        color\n        extraLarge\n      }\n      bannerImage\n  }\n}\n"): (typeof documents)["\nquery Media($mediaId: Int) {\n  Media(id: $mediaId) {\n      id\n      title {\n        english\n        native\n      }\n      description\n      genres\n      isAdult\n      meanScore\n      startDate {\n        year\n        month\n        day\n      }\n      endDate {\n        year\n        month\n        day\n      }\n      type\n      coverImage {\n        color\n        extraLarge\n      }\n      bannerImage\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery PagedMedia($page: Int, $perPage: Int, $search: String, $sort: [MediaSort]) {\n  Page(page: $page, perPage: $perPage) {\n    pageInfo {\n      currentPage\n      hasNextPage\n      total\n      perPage\n      lastPage\n    }\n    media(sort: $sort, search: $search) {\n      id\n      title {\n        english\n        native\n      }\n      description\n      genres\n      isAdult\n      meanScore\n      startDate {\n        year\n        month\n        day\n      }\n      endDate {\n        year\n        month\n        day\n      }\n      type\n      coverImage {\n        color\n        extraLarge\n      }\n      bannerImage\n    }\n  }\n}\n"): (typeof documents)["\nquery PagedMedia($page: Int, $perPage: Int, $search: String, $sort: [MediaSort]) {\n  Page(page: $page, perPage: $perPage) {\n    pageInfo {\n      currentPage\n      hasNextPage\n      total\n      perPage\n      lastPage\n    }\n    media(sort: $sort, search: $search) {\n      id\n      title {\n        english\n        native\n      }\n      description\n      genres\n      isAdult\n      meanScore\n      startDate {\n        year\n        month\n        day\n      }\n      endDate {\n        year\n        month\n        day\n      }\n      type\n      coverImage {\n        color\n        extraLarge\n      }\n      bannerImage\n    }\n  }\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;