import { BaseContextProvider } from "..";
import { ContextItem, ContextProviderDescription } from "../..";

class HttpContextProvider extends BaseContextProvider {
  static description: ContextProviderDescription = {
    title: "http",
    displayTitle: "HTTP",
    description: "Retrieve a context item from a custom server",
    dynamic: true,
    requiresQuery: false,
  };

  override get description(): ContextProviderDescription {
    return {
      title: this.options.title || "http",
      displayTitle: this.options.displayTitle || "HTTP",
      description:
        this.options.description ||
        "Retrieve a context item from a custom server",
      dynamic: true,
      requiresQuery: false,
    };
  }

  async getContextItems(query: string): Promise<ContextItem[]> {
    const response = await fetch(this.options.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
      }),
    });

    const json = await response.json();
    return [
      {
        description: json.description || "HTTP Context Item",
        content: json.content || "",
        name: json.name || this.options.title || "HTTP",
      },
    ];
  }
  async load(): Promise<void> {}
}

export default HttpContextProvider;
