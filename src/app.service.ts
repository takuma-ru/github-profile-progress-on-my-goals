import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello() {
    return `
    <svg width="600" height="214" viewBox="0 0 600 214" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="card">
      <rect width="600" height="214" rx="8" fill="white" />
      <text id="header" fill="black" xml:space="preserve" style="white-space: pre" font-family="Noto Sans" font-size="20"
        font-weight="bold" letter-spacing="0em">
        <tspan x="24" y="45.26">UserName Goal for 2022</tspan>
      </text>
      <path id="Vector 1" d="M28 102H572" stroke="#E0E0E0" stroke-width="12" stroke-linecap="round" />
      <g id="denominator">
        <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Noto Sans" font-size="16"
          font-weight="bold" letter-spacing="0em">
          <tspan x="531.219" y="84.208">99999</tspan>
        </text>
        <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Noto Sans" font-size="12"
          font-weight="bold" letter-spacing="0em">
          <tspan x="497.668" y="84.208">Goal: </tspan>
        </text>
      </g>
      <text id="denominator_2" fill="black" xml:space="preserve" style="white-space: pre" font-family="Noto Sans"
        font-size="16" font-weight="600" letter-spacing="0em">
        <tspan x="273.219" y="128.208">99999</tspan>
      </text>
      <path id="Vector 2" d="M28 96C24.6863 96 22 98.6863 22 102C22 105.314 24.6863 108 28 108V96ZM28 108H296V96H28V108Z"
        fill="#FF8484" />
      <g id="Group 1">
        <text id="commit" fill="black" xml:space="preserve" style="white-space: pre" font-family="Noto Sans"
          font-size="12" font-weight="bold" letter-spacing="0em">
          <tspan x="24" y="79.656">commit</tspan>
        </text>
        <g id="commit_2">
          <mask id="mask0_2_36" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="75" y="66" width="20" height="20">
            <rect id="Bounding box" x="75" y="66" width="20" height="20" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_2_36)">
            <path id="commit_3"
              d="M85 80C84.014 80 83.1563 79.691 82.427 79.073C81.6977 78.455 81.2427 77.6807 81.062 76.75H77V75.25H81.062C81.2427 74.3193 81.6977 73.545 82.427 72.927C83.1563 72.309 84.014 72 85 72C85.986 72 86.8437 72.309 87.573 72.927C88.3023 73.545 88.7573 74.3193 88.938 75.25H93V76.75H88.938C88.7573 77.6807 88.3023 78.455 87.573 79.073C86.8437 79.691 85.986 80 85 80ZM85 78.5C85.6947 78.5 86.285 78.257 86.771 77.771C87.257 77.285 87.5 76.6947 87.5 76C87.5 75.3053 87.257 74.715 86.771 74.229C86.285 73.743 85.6947 73.5 85 73.5C84.3053 73.5 83.715 73.743 83.229 74.229C82.743 74.715 82.5 75.3053 82.5 76C82.5 76.6947 82.743 77.285 83.229 77.771C83.715 78.257 84.3053 78.5 85 78.5Z"
              fill="black" />
          </g>
        </g>
      </g>
      <rect x="0.5" y="0.5" width="599" height="213" rx="7.5" stroke="#838383" stroke-opacity="0.5" />
    </g>
  </svg>
    `;
  }
}
