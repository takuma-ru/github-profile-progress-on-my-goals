import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello() {
    return `
    <svg width="600" height="157" viewBox="0 0 600 157" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;">
        <g id="card">
            <path d="M600,8C600,3.585 596.415,0 592,0L8,0C3.585,0 0,3.585 0,8L0,149C0,153.415 3.585,157 8,157L592,157C596.415,157 600,153.415 600,149L600,8Z" style="fill:white;"/>
            <g transform="matrix(1,0,0,1,24,45.26)">
                <g id="header">
                    <text x="0px" y="0px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:20px;">UserName Goal for 2022</text>
                </g>
            </g>
            <g transform="matrix(1,0,0,1,474.029,84.208)">
                <g id="denominator">
                    <text x="0px" y="0px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:16px;">99999 / 99999</text>
                </g>
            </g>
            <path id="Vector-1" serif:id="Vector 1" d="M27.93,94L576,94" style="fill:none;fill-rule:nonzero;stroke:rgb(224,224,224);stroke-width:8px;"/>
            <g id="Vector-2" serif:id="Vector 2" transform="matrix(0.985294,0,0,1,4.29412,0)">
                <path d="M24,90C21.791,90 20,91.791 20,94C20,96.209 21.791,98 24,98L24,90ZM24,98L292,98L292,90L24,90L24,98Z" style="fill:rgb(83,155,245);fill-rule:nonzero;"/>
            </g>
            <g id="denominator_2">
                <g transform="matrix(1,0,0,1,545.028,116.358)">
                    <text x="0px" y="0px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:16px;">50</text>
                </g>
                <g transform="matrix(1,0,0,1,565.5,116.208)">
                    <text x="0px" y="0px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:12px;">%</text>
                </g>
            </g>
            <g id="Group-1" serif:id="Group 1">
                <g transform="matrix(1,0,0,1,47.3359,79.656)">
                    <g id="commit">
                        <text x="0px" y="0px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:16px;">commit</text>
                    </g>
                </g>
                <g id="commit_2" transform="matrix(1,0,0,1,-53,-0.1565)">
                    <g>
                        <path id="commit_3" d="M85,80C84.014,80 83.156,79.691 82.427,79.073C81.698,78.455 81.243,77.681 81.062,76.75L77,76.75L77,75.25L81.062,75.25C81.243,74.319 81.698,73.545 82.427,72.927C83.156,72.309 84.014,72 85,72C85.986,72 86.844,72.309 87.573,72.927C88.302,73.545 88.757,74.319 88.938,75.25L93,75.25L93,76.75L88.938,76.75C88.757,77.681 88.302,78.455 87.573,79.073C86.844,79.691 85.986,80 85,80ZM85,78.5C85.695,78.5 86.285,78.257 86.771,77.771C87.257,77.285 87.5,76.695 87.5,76C87.5,75.305 87.257,74.715 86.771,74.229C86.285,73.743 85.695,73.5 85,73.5C84.305,73.5 83.715,73.743 83.229,74.229C82.743,74.715 82.5,75.305 82.5,76C82.5,76.695 82.743,77.285 83.229,77.771C83.715,78.257 84.305,78.5 85,78.5Z" style="fill:rgb(128,128,128);fill-rule:nonzero;"/>
                    </g>
                </g>
            </g>
            <path d="M599.5,8C599.5,3.861 596.139,0.5 592,0.5L8,0.5C3.861,0.5 0.5,3.861 0.5,8L0.5,149C0.5,153.139 3.861,156.5 8,156.5L592,156.5C596.139,156.5 599.5,153.139 599.5,149L599.5,8Z" style="fill:none;stroke:rgb(131,131,131);stroke-opacity:0.5;stroke-width:1px;stroke-linecap:butt;"/>
        </g>
    </svg>
    
    `;
  }
}
