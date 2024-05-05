import type { NestMiddleware } from '@nestjs/common'
import { Injectable } from '@nestjs/common'
import type { FastifyReply, FastifyRequest } from 'fastify'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: FastifyRequest['raw'], res: FastifyReply['raw'], next: () => void) {
    console.log('Request...')
    next()
  }
}
