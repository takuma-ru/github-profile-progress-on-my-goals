import { Injectable } from '@nestjs/common';
import * as sharp from 'sharp';

@Injectable()
export class AppService {
  async getHello() {
    const png = await sharp(
      Buffer.from(`
      <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" id="input">
        <circle cx="120" cy="120" r="90" fill="#888888" />
      </svg>
    `),
    )
      .png()
      .toBuffer();

    console.log(png);

    /* return png; */

    return `
      <img
        src="data:image/png;base64,${Buffer.from(png).toString('base64')}""
      />
    `;
  }
}
