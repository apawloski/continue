import { BaseContextProvider } from "..";
import { ContextItem, ContextProviderDescription } from "../..";
import { ExtensionIde } from "../../ide";

class FileContextProvider extends BaseContextProvider {
  static description: ContextProviderDescription = {
    title: "file",
    displayTitle: "Files",
    description: "Type to search",
    dynamic: false,
    requiresQuery: false,
  };

  async getContextItems(query: string): Promise<ContextItem[]> {
    // Assume the query is a filepath
    query = query.trim();
    const content = await new ExtensionIde().readFile(query);
    return [
      {
        name: query.split(/[\\/]/).pop() || query,
        description: query,
        content,
      },
    ];
  }
  async load(): Promise<void> {}
}

export default FileContextProvider;
