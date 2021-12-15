// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
      title: "Games",
      name: "games",
      type: "document",
      fields: [
        {
          title: "Game title",
          name: "name",
          type: "string"
        },
        {
          title: "Create with",
          name: "createWith",
          type: "string"
        },
        {
          title: "Url",
          name: "url",
          type: "string",
        },
        {
          title: "Cover image",
          name: "coverImg",
          type: "image"
        },
        {
          title: "How to play",
          name: "howToPlay",
          type: "string"
        }
      ],
    },
  ]),
});
