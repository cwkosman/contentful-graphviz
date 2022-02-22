require("dotenv").config();
const convertApi = require("contentful-graph");

async function generateDotString() {
  // either with managementToken
  const contentTypes = await convertApi.getContentTypesFromManagementApi(
    process.env.CONTENTFUL_SPACE_ID,
    process.env.CONTENTFUL_MANAGEMENT_TOKEN,
    process.env.CONTENTFUL_ENVIRONMENT
  );

  // enrich content types with relationship definitions
  const modelsMap = convertApi.contentTypesToModelMap(contentTypes);

  // generate dot string that can be passed to graphviz
  console.log(convertApi.modelsMapToDot(modelsMap, {}));
}

generateDotString();
