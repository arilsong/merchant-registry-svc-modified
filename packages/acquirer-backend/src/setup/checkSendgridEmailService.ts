import logger from '../services/logger'
import { checkSendGridAPIKeyValidity } from '../utils/sendGrid'
import { readEnv } from './readEnv'

const apiKey = readEnv('SENDGRID_API_KEY', '<invalid-api-key>') as string

const RETRY_INTERVAL_MS = 30000 // 30s // Time between retries in milliseconds

export async function sendGridSetup (): Promise<void> {
  logger.info('SendGrid Service is disabled. Skipping setup.')
}
