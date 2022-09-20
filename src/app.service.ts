import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
      <svg width="160" height="139" viewBox="0 0 160 139" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M59.4456 1.304L58.4856 1.688C58.8096 2.156 59.1816 2.864 59.4336 3.356L60.3936 2.948C60.1656 2.504 59.7456 1.736 59.4456 1.304ZM60.8616 0.752L59.9136 1.148C60.2376 1.604 60.6216 2.3 60.8736 2.804L61.8336 2.384C61.6176 1.964 61.1736 1.208 60.8616 0.752ZM55.4496 1.88L53.6016 1.52C53.5776 1.892 53.4936 2.348 53.3496 2.744C53.2056 3.2 52.9776 3.824 52.6536 4.388C52.1976 5.132 51.4296 6.212 50.5776 6.86L52.0776 7.772C52.7976 7.136 53.5296 6.116 54.0216 5.24H56.5536C56.3616 7.748 55.3656 9.224 54.1056 10.196C53.8176 10.424 53.3976 10.676 52.9656 10.856L54.5856 11.936C56.7576 10.568 58.0056 8.432 58.2216 5.24H59.9016C60.1776 5.24 60.7056 5.252 61.1496 5.288V3.644C60.7536 3.716 60.2136 3.728 59.9016 3.728H54.7296C54.8616 3.416 54.9696 3.116 55.0656 2.864C55.1616 2.6 55.3176 2.18 55.4496 1.88ZM63.2856 5.444V7.328C63.7296 7.292 64.5336 7.268 65.2176 7.268H71.6616C72.1656 7.268 72.7776 7.316 73.0656 7.328V5.444C72.7536 5.468 72.2256 5.516 71.6616 5.516H65.2176C64.5936 5.516 63.7176 5.48 63.2856 5.444ZM80.4784 1.952L78.5704 1.556C78.5224 1.964 78.4504 2.336 78.2824 2.948C77.9344 4.196 76.9024 7.484 76.2064 9.26C76.0984 9.26 75.9784 9.272 75.8824 9.272C75.4864 9.284 74.9704 9.284 74.5624 9.284L74.8384 11.036C75.2224 10.988 75.6664 10.928 75.9664 10.892C77.4784 10.736 81.1144 10.352 83.0584 10.124C83.2864 10.64 83.4784 11.132 83.6344 11.54L85.2544 10.82C84.7024 9.476 83.4784 7.124 82.6264 5.828L81.1264 6.44C81.5224 6.968 81.9664 7.772 82.3864 8.636C81.1744 8.78 79.4704 8.972 78.0064 9.116C78.6064 7.508 79.5784 4.46 79.9624 3.284C80.1424 2.756 80.3224 2.312 80.4784 1.952ZM95.4544 9.992H88.2064V3.68H86.8144V12.044H88.2064V11.336H95.4544V12.032H96.8344V3.68H95.4544V9.992ZM93.4384 6.02H92.3944V5.012H93.4384V6.02ZM93.4384 8.12H92.3944V7.1H93.4384V8.12ZM90.1264 7.1H91.1704V8.12H90.1264V7.1ZM90.1264 5.012H91.1704V6.02H90.1264V5.012ZM86.4544 1.556V2.888H91.0624V3.848H88.9624V9.284H94.6744V3.848H92.4904V2.888H97.1944V1.556H86.4544ZM107.238 10.124H105.942V5.264H107.238V10.124ZM100.314 5.264H101.55V10.124H100.314V5.264ZM104.658 6.092H102.822V5.264H104.658V6.092ZM102.822 9.236H104.658V10.124H102.822V9.236ZM104.658 8.12H102.822V7.208H104.658V8.12ZM109.242 2.864V1.52H98.4424V2.864H102.822C102.774 3.224 102.702 3.596 102.63 3.944H98.9344V12.044H100.314V11.432H107.238V12.044H108.69V3.944H104.13C104.226 3.596 104.346 3.236 104.454 2.864H109.242Z" fill="#1A222B"/>
      <rect x="2" y="24" width="156" height="86" rx="2" fill="#4D6D8D" stroke="#1A222B" stroke-width="4"/>
      <rect x="117" y="89" width="32" height="16" rx="4" fill="#F5F5F5"/>
      <path d="M127.768 99.256C128.328 99.256 128.56 98.976 128.648 98.16C128.408 98.104 128.08 97.976 127.896 97.84C127.872 98.336 127.84 98.456 127.696 98.456H127.136C126.96 98.456 126.928 98.416 126.928 98.096V96.744C127.352 97.048 127.808 97.432 128.032 97.712L128.656 97.112C128.36 96.776 127.728 96.32 127.232 96.024L126.928 96.304V95.48L127.552 95.736C127.832 95.344 128.184 94.728 128.52 94.176L127.568 93.872C127.424 94.32 127.168 94.928 126.928 95.376V93.232H126.08V98.096C126.08 99.008 126.256 99.256 126.984 99.256H127.768ZM124.784 95.504V95.992V96.2C124.176 96.536 123.568 96.872 123.152 97.072L123.6 97.88C123.936 97.664 124.312 97.416 124.672 97.168C124.52 97.8 124.176 98.344 123.392 98.76C123.584 98.896 123.88 99.216 124.008 99.416C125.424 98.624 125.624 97.384 125.624 96V93.232H124.784V95.416C124.688 94.96 124.416 94.344 124.128 93.872L123.376 94.136C123.664 94.664 123.92 95.352 123.992 95.792L124.784 95.504ZM123.344 94.696C123.088 94.312 122.536 93.784 122.088 93.424L121.36 93.968C121.808 94.352 122.336 94.904 122.56 95.296L123.344 94.696ZM123.128 96.328H121.328V97.2H122.224V98.944C121.904 99.216 121.544 99.48 121.232 99.68L121.68 100.624C122.088 100.28 122.416 99.976 122.736 99.664C123.216 100.28 123.856 100.512 124.808 100.552C125.784 100.592 127.48 100.576 128.472 100.528C128.52 100.264 128.656 99.824 128.768 99.6C127.664 99.688 125.776 99.712 124.816 99.672C124 99.64 123.44 99.416 123.128 98.88V96.328ZM135 93.8H133.848C133.88 93.928 133.92 94.16 133.936 94.352C133.952 94.568 133.968 94.992 133.976 95.432C133.696 95.44 133.416 95.448 133.152 95.448C132.72 95.448 132.328 95.424 131.936 95.368V96.376C132.336 96.4 132.824 96.424 133.176 96.424C133.44 96.424 133.72 96.424 133.992 96.416C133.992 96.52 133.992 96.616 133.992 96.696C133.992 98.048 133.856 98.76 133.248 99.4C133.024 99.648 132.624 99.904 132.312 100.04L133.24 100.768C134.832 99.752 134.976 98.592 134.976 96.704C134.976 96.624 134.976 96.504 134.976 96.376C135.456 96.344 135.896 96.312 136.24 96.272L136.248 95.232C135.896 95.296 135.448 95.344 134.968 95.384C134.968 94.936 134.968 94.52 134.976 94.352C134.976 94.168 134.984 93.976 135 93.8ZM131.112 93.936L129.928 93.824C129.92 94.024 129.912 94.296 129.88 94.512C129.776 95.168 129.616 96.4 129.616 97.712C129.616 98.704 129.896 99.824 130.072 100.304L130.968 100.216C130.96 100.104 130.952 99.968 130.944 99.88C130.944 99.792 130.968 99.616 130.992 99.488C131.096 99.04 131.304 98.232 131.544 97.544L131.04 97.224C130.912 97.512 130.76 97.904 130.656 98.152C130.44 97.16 130.728 95.48 130.928 94.592C130.96 94.424 131.048 94.136 131.112 93.936ZM135.632 93.52L135.088 93.688C135.248 94.016 135.392 94.48 135.504 94.824L136.056 94.64C135.968 94.336 135.784 93.84 135.632 93.52ZM136.456 93.264L135.912 93.44C136.072 93.76 136.232 94.216 136.352 94.56L136.896 94.384C136.8 94.08 136.608 93.584 136.456 93.264ZM140.12 99.056C140.12 98.856 140.312 98.672 140.616 98.672C141.048 98.672 141.344 99.008 141.392 99.528C141.248 99.544 141.096 99.552 140.928 99.552C140.448 99.552 140.12 99.352 140.12 99.056ZM138.76 93.904L138.792 94.944C138.976 94.92 139.232 94.896 139.448 94.88C139.872 94.856 140.976 94.808 141.384 94.8C140.992 95.144 140.16 95.816 139.712 96.184C139.24 96.576 138.272 97.392 137.704 97.848L138.432 98.6C139.288 97.624 140.088 96.976 141.312 96.976C142.256 96.976 142.976 97.464 142.976 98.184C142.976 98.672 142.752 99.04 142.312 99.272C142.2 98.512 141.6 97.904 140.608 97.904C139.76 97.904 139.176 98.504 139.176 99.152C139.176 99.952 140.016 100.464 141.128 100.464C143.064 100.464 144.024 99.464 144.024 98.2C144.024 97.032 142.992 96.184 141.632 96.184C141.376 96.184 141.136 96.208 140.872 96.272C141.376 95.872 142.216 95.168 142.648 94.864C142.832 94.728 143.024 94.616 143.208 94.496L142.688 93.784C142.592 93.816 142.408 93.84 142.08 93.872C141.624 93.912 139.912 93.944 139.488 93.944C139.264 93.944 138.984 93.936 138.76 93.904Z" fill="#1A222B"/>
      <rect x="85" y="89" width="24" height="16" rx="4" fill="#F5F5F5"/>
      <path d="M96.672 94.672C96.544 94.296 96.192 93.744 95.872 93.32L95.152 93.696C95.464 94.12 95.776 94.72 95.904 95.088L96.672 94.672ZM91.872 94.56C91.816 94.208 91.656 93.648 91.48 93.232L90.696 93.408C90.856 93.848 91 94.424 91.032 94.784L91.872 94.56ZM90.576 94.712C90.504 94.352 90.272 93.808 90.04 93.4L89.264 93.648C89.48 94.072 89.696 94.64 89.752 94.992L90.576 94.712ZM90.312 96.904H91.024V97.36H90.312V96.904ZM90.312 95.784H91.024V96.248H90.312V95.784ZM92.496 96.248H91.816V95.784H92.496V96.248ZM92.496 97.36H91.816V96.904H92.496V97.36ZM93.528 99.376V98.536H91.872V98.064H93.312V95.088H92.792C93.056 94.696 93.4 94.08 93.688 93.512L92.704 93.248C92.568 93.752 92.28 94.416 92.032 94.848L92.76 95.088H89.544V98.064H90.968V98.536H89.264V99.376H90.968V100.688H91.872V99.376H93.528ZM95.848 96.264C95.696 96.752 95.48 97.224 95.224 97.672C95.152 97.248 95.096 96.76 95.048 96.24L96.768 96.024L96.672 95.152L94.984 95.36C94.944 94.696 94.92 93.992 94.912 93.256H94.008C94.032 94.04 94.056 94.776 94.096 95.464L93.384 95.552L93.48 96.432L94.168 96.344C94.24 97.248 94.352 98.032 94.504 98.68C94 99.256 93.408 99.728 92.736 100.032C92.976 100.2 93.264 100.48 93.424 100.696C93.92 100.424 94.384 100.064 94.8 99.632C95.072 100.28 95.44 100.648 95.92 100.664C96.256 100.68 96.656 100.368 96.864 99.024C96.712 98.936 96.336 98.68 96.184 98.48C96.136 99.168 96.056 99.536 95.92 99.536C95.752 99.52 95.6 99.264 95.472 98.824C95.944 98.168 96.32 97.432 96.568 96.672L95.848 96.264ZM102.48 97.384C102.48 98.632 101.2 99.288 99.216 99.512L99.792 100.504C102.016 100.2 103.6 99.136 103.6 97.424C103.6 96.168 102.712 95.448 101.448 95.448C100.512 95.448 99.616 95.68 99.032 95.816C98.768 95.872 98.424 95.928 98.152 95.952L98.456 97.096C98.688 97.008 99 96.88 99.232 96.816C99.64 96.696 100.432 96.424 101.312 96.424C102.064 96.424 102.48 96.856 102.48 97.384ZM99.336 93.544L99.176 94.504C100.096 94.664 101.832 94.824 102.768 94.888L102.928 93.904C102.08 93.896 100.264 93.744 99.336 93.544Z" fill="#1A222B"/>
      <circle cx="35" cy="77" r="12" fill="#F5F5F5"/>
      <path d="M31.5359 96C33.0755 93.3333 36.9245 93.3333 38.4641 96L41.9282 102C43.4678 104.667 41.5433 108 38.4641 108H31.5359C28.4567 108 26.5322 104.667 28.0718 102L31.5359 96Z" fill="#F5F5F5"/>
      <circle cx="124" cy="49" r="7" fill="#F5F5F5"/>
      <path d="M121.685 60.875C122.936 58.7083 126.064 58.7083 127.315 60.875C128.566 63.0417 127.002 65.75 124.5 65.75C121.998 65.75 120.434 63.0417 121.685 60.875Z" fill="#F5F5F5"/>
      <path d="M15.544 138.224C17.192 138.224 18.584 137.584 19.384 136.8V131.456H15.176V133.392H17.272V135.728C16.936 136.016 16.36 136.176 15.8 136.176C13.464 136.176 12.28 134.624 12.28 132.048C12.28 129.504 13.656 127.968 15.624 127.968C16.696 127.968 17.368 128.4 17.96 128.96L19.208 127.456C18.44 126.672 17.256 125.936 15.544 125.936C12.392 125.936 9.864 128.224 9.864 132.128C9.864 136.08 12.328 138.224 15.544 138.224ZM23.9408 138.224C24.9648 138.224 25.8608 137.712 26.6448 137.04H26.7088L26.8688 138H28.7888V132.768C28.7888 130.176 27.6208 128.816 25.3488 128.816C23.9408 128.816 22.6608 129.344 21.6048 130L22.4528 131.552C23.2848 131.072 24.0848 130.704 24.9168 130.704C26.0208 130.704 26.4048 131.376 26.4528 132.256C22.8368 132.64 21.2848 133.648 21.2848 135.568C21.2848 137.088 22.3408 138.224 23.9408 138.224ZM24.7088 136.384C24.0208 136.384 23.5248 136.08 23.5248 135.376C23.5248 134.576 24.2608 133.968 26.4528 133.696V135.504C25.8768 136.064 25.3808 136.384 24.7088 136.384ZM31.1859 138H33.5379V131.84C34.1619 131.168 34.7379 130.832 35.2499 130.832C36.0979 130.832 36.5139 131.312 36.5139 132.704V138H38.8499V131.84C39.4899 131.168 40.0659 130.832 40.5779 130.832C41.4259 130.832 41.8259 131.312 41.8259 132.704V138H44.1779V132.416C44.1779 130.16 43.2979 128.816 41.3939 128.816C40.2259 128.816 39.3619 129.52 38.5459 130.384C38.1139 129.392 37.3619 128.816 36.0819 128.816C34.9139 128.816 34.0819 129.456 33.3299 130.24H33.2819L33.1059 129.04H31.1859V138ZM50.5118 138.224C51.6158 138.224 52.7518 137.84 53.6318 137.232L52.8318 135.792C52.1918 136.192 51.5518 136.416 50.8158 136.416C49.4878 136.416 48.5278 135.648 48.3358 134.176H53.8558C53.9198 133.968 53.9678 133.536 53.9678 133.088C53.9678 130.624 52.6878 128.816 50.2238 128.816C48.0958 128.816 46.0478 130.624 46.0478 133.52C46.0478 136.48 47.9998 138.224 50.5118 138.224ZM48.3038 132.608C48.4798 131.312 49.3118 130.64 50.2558 130.64C51.4078 130.64 51.9518 131.408 51.9518 132.608H48.3038ZM59.2576 138.224C61.9936 138.224 63.6096 136.576 63.6096 134.64C63.6096 132.928 62.6656 132.016 61.2256 131.424L59.6736 130.768C58.6656 130.368 57.8336 130.064 57.8336 129.216C57.8336 128.432 58.4896 127.968 59.5296 127.968C60.5056 127.968 61.2896 128.32 62.0416 128.944L63.2416 127.456C62.2816 126.48 60.9056 125.936 59.5296 125.936C57.1296 125.936 55.4336 127.424 55.4336 129.36C55.4336 131.088 56.6336 132.048 57.8336 132.544L59.4176 133.216C60.4736 133.664 61.1936 133.936 61.1936 134.816C61.1936 135.648 60.5376 136.176 59.3056 136.176C58.2656 136.176 57.1456 135.648 56.2976 134.864L54.9376 136.496C56.0896 137.6 57.6736 138.224 59.2576 138.224ZM69.322 138.224C70.314 138.224 71.402 137.888 72.266 137.136L71.322 135.584C70.826 136 70.218 136.304 69.578 136.304C68.298 136.304 67.354 135.216 67.354 133.52C67.354 131.84 68.282 130.736 69.658 130.736C70.154 130.736 70.57 130.944 71.018 131.328L72.138 129.808C71.482 129.248 70.634 128.816 69.53 128.816C67.098 128.816 64.954 130.544 64.954 133.52C64.954 136.496 66.842 138.224 69.322 138.224ZM77.3711 138.224C78.4751 138.224 79.6111 137.84 80.4911 137.232L79.6911 135.792C79.0511 136.192 78.4111 136.416 77.6751 136.416C76.3471 136.416 75.3871 135.648 75.1951 134.176H80.7151C80.7791 133.968 80.8271 133.536 80.8271 133.088C80.8271 130.624 79.5471 128.816 77.0831 128.816C74.9551 128.816 72.9071 130.624 72.9071 133.52C72.9071 136.48 74.8591 138.224 77.3711 138.224ZM75.1631 132.608C75.3391 131.312 76.1711 130.64 77.1151 130.64C78.2671 130.64 78.8111 131.408 78.8111 132.608H75.1631ZM82.764 138H85.116V131.84C85.772 131.184 86.236 130.832 86.972 130.832C87.852 130.832 88.236 131.312 88.236 132.704V138H90.588V132.416C90.588 130.16 89.756 128.816 87.82 128.816C86.604 128.816 85.692 129.456 84.908 130.224H84.86L84.684 129.04H82.764V138ZM96.918 138.224C98.022 138.224 99.158 137.84 100.038 137.232L99.238 135.792C98.598 136.192 97.958 136.416 97.222 136.416C95.894 136.416 94.934 135.648 94.742 134.176H100.262C100.326 133.968 100.374 133.536 100.374 133.088C100.374 130.624 99.094 128.816 96.63 128.816C94.502 128.816 92.454 130.624 92.454 133.52C92.454 136.48 94.406 138.224 96.918 138.224ZM94.71 132.608C94.886 131.312 95.718 130.64 96.662 130.64C97.814 130.64 98.358 131.408 98.358 132.608H94.71ZM103.639 138.224C104.487 138.224 105.111 137.552 105.111 136.688C105.111 135.808 104.487 135.152 103.639 135.152C102.807 135.152 102.183 135.808 102.183 136.688C102.183 137.552 102.807 138.224 103.639 138.224ZM110.074 138.224C112.41 138.224 113.642 136.96 113.642 135.392C113.642 133.728 112.33 133.136 111.146 132.688C110.202 132.336 109.37 132.096 109.37 131.44C109.37 130.928 109.754 130.576 110.57 130.576C111.226 130.576 111.85 130.88 112.49 131.344L113.546 129.92C112.81 129.36 111.802 128.816 110.506 128.816C108.458 128.816 107.162 129.952 107.162 131.552C107.162 133.056 108.426 133.744 109.562 134.176C110.506 134.544 111.434 134.848 111.434 135.52C111.434 136.08 111.034 136.464 110.138 136.464C109.306 136.464 108.538 136.112 107.738 135.488L106.666 136.96C107.562 137.696 108.874 138.224 110.074 138.224ZM119.244 138.224C120.236 138.224 121.324 137.888 122.188 137.136L121.244 135.584C120.748 136 120.14 136.304 119.5 136.304C118.22 136.304 117.276 135.216 117.276 133.52C117.276 131.84 118.204 130.736 119.58 130.736C120.076 130.736 120.492 130.944 120.94 131.328L122.06 129.808C121.404 129.248 120.556 128.816 119.452 128.816C117.02 128.816 114.876 130.544 114.876 133.52C114.876 136.496 116.764 138.224 119.244 138.224ZM127.293 138.224C128.397 138.224 129.533 137.84 130.413 137.232L129.613 135.792C128.973 136.192 128.333 136.416 127.597 136.416C126.269 136.416 125.309 135.648 125.117 134.176H130.637C130.701 133.968 130.749 133.536 130.749 133.088C130.749 130.624 129.469 128.816 127.005 128.816C124.877 128.816 122.829 130.624 122.829 133.52C122.829 136.48 124.781 138.224 127.293 138.224ZM125.085 132.608C125.261 131.312 126.093 130.64 127.037 130.64C128.189 130.64 128.733 131.408 128.733 132.608H125.085ZM132.686 138H135.038V131.84C135.694 131.184 136.158 130.832 136.894 130.832C137.774 130.832 138.158 131.312 138.158 132.704V138H140.51V132.416C140.51 130.16 139.678 128.816 137.742 128.816C136.526 128.816 135.614 129.456 134.83 130.224H134.782L134.606 129.04H132.686V138ZM146.84 138.224C147.944 138.224 149.08 137.84 149.96 137.232L149.16 135.792C148.52 136.192 147.88 136.416 147.144 136.416C145.816 136.416 144.856 135.648 144.664 134.176H150.184C150.248 133.968 150.296 133.536 150.296 133.088C150.296 130.624 149.016 128.816 146.552 128.816C144.424 128.816 142.376 130.624 142.376 133.52C142.376 136.48 144.328 138.224 146.84 138.224ZM144.632 132.608C144.808 131.312 145.64 130.64 146.584 130.64C147.736 130.64 148.28 131.408 148.28 132.608H144.632Z" fill="#1A222B"/>
      </svg>
    `;
  }
}
