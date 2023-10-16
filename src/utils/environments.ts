class Environment {
  private static instance: Environment;

  constructor() {}

  //-------------------------------------------------------------------------
  static getInstance(): Environment {
    if (!this.instance) {
      this.instance = new Environment();
    }
    return this.instance;
  }

  //-------------------------------------------------------------------------
  get(key: string, defaultValue?: any) {
    return import.meta.env[key] ?? defaultValue;
  }
}

export const environment = Environment.getInstance();

const baseUrlEnv = (): string => {
  switch (environment.get("VITE_BASE_URL")) {
    case "production": {
      return "";
    }

    case "dev-local": {
      return "http://localhost:3000/v1/api";
    }

    case "testing": {
      return "";
    }

    case "staging": {
      return "";
    }

    default: {
      return "https://develop.sm-erp-be.minimaltek.com/v1/api";
    }
  }
};

export const BASE_URL = baseUrlEnv();
