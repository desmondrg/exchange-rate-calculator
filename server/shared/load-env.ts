import * as dotenv from 'dotenv';
import * as yargs from 'yargs';

/**
 * Loads Enviroment Variables
 */
export class LoadEnv
{
  result: any;

 get options()
 {

   const opts:any = yargs.options({
     env: {
       alias: 'e',
       default: 'development',
       description: 'app environment'
     },
     port: {
       alias: 'p',
       description: 'PORT'
     }
   }).argv;

   return opts;
 }

  constructor()
    {
    }

  getEnvFileName()
  {
    let envFileName = this.options.env;

    if(envFileName === 'production')
    {
        envFileName = '';
    }

    return envFileName ?? process.env.NODE_ENV;
  }


    /**
     * Gets the env file name in the form .env.{envArgValue}
     */
   getEnvPath()
    {
      return `${process.cwd()}/.env${this.getEnvFileName() ? '.' + this.getEnvFileName() : ''}`;
    }

    /**
     * Loads Environment variables using the passed in path
     * If no path is provided, then the path will be
     * generated from the value passed in with the -e environment variable
     * see getEnvPath function and getEnvFileName function
     * @param source the source path of the environment variable file
     */
    load(source?: string)
    {

      this.result = dotenv.config({
            path: source ?? this.getEnvPath(),
        });

      if (this.result.error)
        {
            throw this.result.error;
        }

      return this.result;
    }
}

/**
 * Globally Accessible Environment Variables file
 */
export const loadEnv = new LoadEnv();
