import { WorkspaceConfiguration, workspace } from "coc.nvim";

/** key is file extension */
export type AdapterCommand = Record<string, AdapterConfiguration[]>;

export class Config {
  private readonly rootSection = "testing";
  private readonly cfg: WorkspaceConfiguration;

  constructor() {
    this.cfg = workspace.getConfiguration(this.rootSection);
  }

  get serverPath(): string {
    return (
      this.cfg.get<null | string>("server.path") || "testing-language-server"
    );
  }

  get adapterCommands(): AdapterCommand {
    return this.cfg.get<AdapterCommand | null>("adapterCommand") || {};
  }

  get fileTypes(): string[] {
    return this.cfg.get<null | string[]>("fileTypes") || [];
  }

  get enabled() {
    return this.cfg.get<boolean>("enabled") || true;
  }
}
