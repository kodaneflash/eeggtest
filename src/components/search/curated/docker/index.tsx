import React from 'react'
import dockerPageData from './docker-page-data'
import Image from 'next/legacy/image'
import Link from 'next/link'
import {get, find} from 'lodash'
import Markdown from 'react-markdown'
import {bpMinMD} from '@/utils/breakpoints'
import {track} from '@/utils/analytics'
import SearchCuratedEssential from '../curated-essential'
import ExternalTrackedLink from '@/components/external-tracked-link'

const SearchDocker = () => {
  return (
    <SearchCuratedEssential
      topic={{
        label: 'Docker',
        name: 'docker',
        description: `Docker containers wrap a piece of software in a complete filesystem that contains everything needed to run: code, runtime, system tools, system libraries – anything that can be installed on a server. This guarantees that the software will always run the same, regardless of its environment.`,
      }}
      pageData={dockerPageData}
      CTAComponent={DockerCourse}
    />
  )
}

const DockerCourse: React.FC<React.PropsWithChildren<{location: string}>> = ({
  location,
}) => {
  const resource: any = find(dockerPageData, {id: 'jumbotron'})
  const {path, image, title, byline, instructor} = resource
  return (
    <ExternalTrackedLink
      eventName="clicked epic react banner"
      params={{location}}
      className="block md:col-span-4 w-full h-full overflow-hidden border-0 border-gray-100 relative text-center"
      href="/playlists/containerize-full-stack-javascript-applications-with-docker-30a8"
    >
      <div className="md:min-h-[477px] md:-mt-5 flex items-center justify-center bg-gray-900 dark:bg-gray-800 text-white overflow-hidden rounded-b-lg md:rounded-t-none rounded-t-lg shadow-sm">
        <div className="relative z-10 px-5 sm:py-16 py-10 sm:text-left text-center">
          <div className="space-y-5 mx-auto flex items-center justify-center max-w-screen-xl">
            <div className="flex flex-col items-center justify-center sm:space-x-5 sm:space-y-0 space-y-5">
              <div className="flex-shrink-0">
                <Link
                  href={path}
                  tabIndex={-1}
                  onClick={() =>
                    track('clicked jumbotron resource', {
                      resource: path,
                      linkType: 'image',
                    })
                  }
                >
                  <Image
                    quality={100}
                    src={get(image, 'src', image)}
                    width={250}
                    height={250}
                    alt={get(image, 'alt', `illustration for ${title}`)}
                  />
                </Link>
              </div>
              <div className="flex flex-col sm:items-start items-center">
                <h2 className="text-xs text-orange-300 uppercase font-semibold mb-2">
                  {byline}
                </h2>
                <Link
                  href={path}
                  className="text-xl font-extrabold leading-tighter hover:text-blue-300"
                  onClick={() =>
                    track('clicked jumbotron resource', {
                      resource: path,
                      linkType: 'text',
                    })
                  }
                >
                  <h1>{title}</h1>
                </Link>
                <Link
                  href={instructor.path}
                  className="mt-4 flex items-center space-x-2 text-base group"
                  onClick={() =>
                    track('clicked instructor in jumbotron', {
                      instructor: instructor.slug,
                    })
                  }
                >
                  <Image
                    src={instructor.image}
                    width={40}
                    height={40}
                    className="rounded-full"
                    alt={instructor.name}
                  />
                  <span className="group-hover:text-blue-200">
                    {instructor.name}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <UniqueBackground className="absolute left-0 top-0 w-full h-full z-0" />
      </div>
    </ExternalTrackedLink>
  )
}

const UniqueBackground = ({className}: any) => {
  return (
    <svg
      preserveAspectRatio="xMidYMid slice"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1000 477"
    >
      <defs>
        <rect id="bg-a" width="1280" height="477" x="0" y="0" />
        <linearGradient id="bg-b" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#6E7596" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <linearGradient id="bg-d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#6E7596" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="bg-c" fill="#fff">
          <use xlinkHref="#bg-a" />
        </mask>
        <path
          fill="url(#bg-b)"
          d="M0,370.400749 C47.30625,367.061174 130.092188,384.593945 248.357813,422.999064 C425.75625,480.606742 570.121875,387.933521 712.040625,387.933521 C853.959375,387.933521 955.504688,441.366729 1087.63594,441.366729 C1219.76719,441.366729 1307.85469,387.933521 1419.1875,387.933521 C1493.40938,387.933521 1542.34688,391.551394 1566,398.787141 L1566,477 L0,477 L0,370.400749 Z"
          mask="url(#bg-c)"
          opacity=".1"
        />
        <path
          fill="url(#bg-d)"
          d="M0,381.359551 C38.6666667,378.363296 106.333333,394.093633 203,428.550562 C348,480.235955 466,397.089888 582,397.089888 C698,397.089888 781,445.029963 889,445.029963 C997,445.029963 1069,397.089888 1160,397.089888 C1220.66667,397.089888 1260.66667,400.33583 1280,406.827715 L1280,477 L0,477 L0,381.359551 Z"
          mask="url(#bg-c)"
          opacity=".3"
        />
        <circle cx="938" cy="410" r="3" fill="#3C4266" />
        <circle cx="34" cy="354" r="3" fill="#3C4266" />
        <circle cx="1143" cy="70" r="3" fill="#3C4266" />
        <path
          fill="#5A6399"
          fillRule="nonzero"
          d="M359.302446 91.192774L355.876731 92.1394957C353.800972 92.7131469 352.191865 94.3552677 351.660483 96.4422477L350.693816 100.238795C350.666561 100.345837 350.557693 100.410517 350.450651 100.383262 350.379676 100.365191 350.324255 100.30977 350.306184 100.238795L349.339517 96.4422477C348.808135 94.3552677 347.199028 92.7131469 345.123269 92.1394957L341.697554 91.192774C341.591087 91.1633513 341.528631 91.0531916 341.558054 90.9467255 341.576789 90.8789311 341.629759 90.8259614 341.697554 90.807226L345.123269 89.8605043C347.199028 89.2868531 348.808135 87.6447323 349.339517 85.5577523L350.306184 81.7612051C350.333439 81.6541634 350.442307 81.5894833 350.549349 81.6167379 350.620324 81.6348094 350.675745 81.6902301 350.693816 81.7612051L351.660483 85.5577523C352.191865 87.6447323 353.800972 89.2868531 355.876731 89.8605043L359.302446 90.807226C359.408913 90.8366487 359.471369 90.9468084 359.441946 91.0532745 359.423211 91.1210689 359.370241 91.1740386 359.302446 91.192774zM1000.30245 90.192774L996.876731 91.1394957C994.800972 91.7131469 993.191865 93.3552677 992.660483 95.4422477L991.693816 99.2387949C991.666561 99.3458366 991.557693 99.4105167 991.450651 99.3832621 991.379676 99.3651906 991.324255 99.3097699 991.306184 99.2387949L990.339517 95.4422477C989.808135 93.3552677 988.199028 91.7131469 986.123269 91.1394957L982.697554 90.192774C982.591087 90.1633513 982.528631 90.0531916 982.558054 89.9467255 982.576789 89.8789311 982.629759 89.8259614 982.697554 89.807226L986.123269 88.8605043C988.199028 88.2868531 989.808135 86.6447323 990.339517 84.5577523L991.306184 80.7612051C991.333439 80.6541634 991.442307 80.5894833 991.549349 80.6167379 991.620324 80.6348094 991.675745 80.6902301 991.693816 80.7612051L992.660483 84.5577523C993.191865 86.6447323 994.800972 88.2868531 996.876731 88.8605043L1000.30245 89.807226C1000.40891 89.8366487 1000.47137 89.9468084 1000.44195 90.0532745 1000.42321 90.1210689 1000.37024 90.1740386 1000.30245 90.192774zM832.302446 389.192774L828.876731 390.139496C826.800972 390.713147 825.191865 392.355268 824.660483 394.442248L823.693816 398.238795C823.666561 398.345837 823.557693 398.410517 823.450651 398.383262 823.379676 398.365191 823.324255 398.30977 823.306184 398.238795L822.339517 394.442248C821.808135 392.355268 820.199028 390.713147 818.123269 390.139496L814.697554 389.192774C814.591087 389.163351 814.528631 389.053192 814.558054 388.946725 814.576789 388.878931 814.629759 388.825961 814.697554 388.807226L818.123269 387.860504C820.199028 387.286853 821.808135 385.644732 822.339517 383.557752L823.306184 379.761205C823.333439 379.654163 823.442307 379.589483 823.549349 379.616738 823.620324 379.634809 823.675745 379.69023 823.693816 379.761205L824.660483 383.557752C825.191865 385.644732 826.800972 387.286853 828.876731 387.860504L832.302446 388.807226C832.408913 388.836649 832.471369 388.946808 832.441946 389.053275 832.423211 389.121069 832.370241 389.174039 832.302446 389.192774z"
          opacity=".2"
        />
        <path
          fill="#5A6399"
          fillRule="nonzero"
          d="M718.302446,86.192774 L714.876731,87.1394957 C712.800972,87.7131469 711.191865,89.3552677 710.660483,91.4422477 L709.693816,95.2387949 C709.666561,95.3458366 709.557693,95.4105167 709.450651,95.3832621 C709.379676,95.3651906 709.324255,95.3097699 709.306184,95.2387949 L708.339517,91.4422477 C707.808135,89.3552677 706.199028,87.7131469 704.123269,87.1394957 L700.697554,86.192774 C700.591087,86.1633513 700.528631,86.0531916 700.558054,85.9467255 C700.576789,85.8789311 700.629759,85.8259614 700.697554,85.807226 L704.123269,84.8605043 C706.199028,84.2868531 707.808135,82.6447323 708.339517,80.5577523 L709.306184,76.7612051 C709.333439,76.6541634 709.442307,76.5894833 709.549349,76.6167379 C709.620324,76.6348094 709.675745,76.6902301 709.693816,76.7612051 L710.660483,80.5577523 C711.191865,82.6447323 712.800972,84.2868531 714.876731,84.8605043 L718.302446,85.807226 C718.408913,85.8366487 718.471369,85.9468084 718.441946,86.0532745 C718.423211,86.1210689 718.370241,86.1740386 718.302446,86.192774 Z"
          transform="rotate(-30 709.5 86)"
        />
        <path
          fill="#5A6399"
          fillRule="nonzero"
          d="M412.76318,60.1934443 L411.137841,60.62016 C409.677263,61.0036193 408.534369,62.1406781 408.143439,63.5992738 L407.693182,65.2792217 C407.664587,65.3859131 407.554915,65.4492225 407.448224,65.4206273 C407.379215,65.4021318 407.325314,65.34823 407.306818,65.2792217 L406.856561,63.5992738 C406.465631,62.1406781 405.322737,61.0036193 403.862159,60.62016 L402.23682,60.1934443 C402.129984,60.1653956 402.066114,60.0560496 402.094162,59.9492132 C402.11249,59.8794032 402.16701,59.8248836 402.23682,59.8065557 L403.862159,59.37984 C405.322737,58.9963807 406.465631,57.8593219 406.856561,56.4007262 L407.306818,54.7207783 C407.335413,54.6140869 407.445085,54.5507775 407.551776,54.5793727 C407.620785,54.5978682 407.674686,54.65177 407.693182,54.7207783 L408.143439,56.4007262 C408.534369,57.8593219 409.677263,58.9963807 411.137841,59.37984 L412.76318,59.8065557 C412.870016,59.8346044 412.933886,59.9439504 412.905838,60.0507868 C412.88751,60.1205968 412.83299,60.1751164 412.76318,60.1934443 Z"
          transform="rotate(-30 407.5 60)"
        />
        <path
          fill="#5A6399"
          fillRule="nonzero"
          d="M1129.08139,129.250819 L1124.52625,130.494558 C1121.82499,131.232113 1119.72635,133.36103 1119.02756,136.072578 L1117.75177,141.023035 C1117.71594,141.162086 1117.57417,141.245759 1117.43512,141.209924 C1117.34344,141.186298 1117.27185,141.11471 1117.24823,141.023035 L1115.97244,136.072578 C1115.27365,133.36103 1113.17501,131.232113 1110.47375,130.494558 L1105.91861,129.250819 C1105.78009,129.212996 1105.69845,129.07004 1105.73628,128.931516 C1105.76051,128.842757 1105.82985,128.773416 1105.91861,128.749181 L1110.47375,127.505442 C1113.17501,126.767887 1115.27365,124.63897 1115.97244,121.927422 L1117.24823,116.976965 C1117.28406,116.837914 1117.42583,116.754241 1117.56488,116.790076 C1117.65656,116.813702 1117.72815,116.88529 1117.75177,116.976965 L1119.02756,121.927422 C1119.72635,124.63897 1121.82499,126.767887 1124.52625,127.505442 L1129.08139,128.749181 C1129.21991,128.787004 1129.30155,128.92996 1129.26372,129.068484 C1129.23949,129.157243 1129.17015,129.226584 1129.08139,129.250819 Z"
        />
        <path
          fill="#5A6399"
          fillRule="nonzero"
          d="M256.463578,46.1502207 L253.709678,46.9214287 C252.092563,47.3742891 250.842051,48.6588704 250.432812,50.2875716 L249.651297,53.3978641 C249.630301,53.4814232 249.545543,53.5321408 249.461984,53.5111452 C249.406238,53.4971379 249.36271,53.4536105 249.348703,53.3978641 L248.567188,50.2875716 C248.157949,48.6588704 246.907437,47.3742891 245.290322,46.9214287 L242.536422,46.1502207 C242.453457,46.1269872 242.405036,46.0408965 242.428269,45.9579319 C242.442961,45.9054687 242.483959,45.8644711 242.536422,45.8497793 L245.290322,45.0785713 C246.907437,44.6257109 248.157949,43.3411296 248.567188,41.7124284 L249.348703,38.6021359 C249.369699,38.5185768 249.454457,38.4678592 249.538016,38.4888548 C249.593762,38.5028621 249.63729,38.5463895 249.651297,38.6021359 L250.432812,41.7124284 C250.842051,43.3411296 252.092563,44.6257109 253.709678,45.0785713 L256.463578,45.8497793 C256.546543,45.8730128 256.594964,45.9591035 256.571731,46.0420681 C256.557039,46.0945313 256.516041,46.1355289 256.463578,46.1502207 Z"
          transform="rotate(-30 249.5 46)"
        />
        <path
          fill="#5A6399"
          fillRule="nonzero"
          d="M915.302446,50.192774 L911.876731,51.1394957 C909.800972,51.7131469 908.191865,53.3552677 907.660483,55.4422477 L906.693816,59.2387949 C906.666561,59.3458366 906.557693,59.4105167 906.450651,59.3832621 C906.379676,59.3651906 906.324255,59.3097699 906.306184,59.2387949 L905.339517,55.4422477 C904.808135,53.3552677 903.199028,51.7131469 901.123269,51.1394957 L897.697554,50.192774 C897.591087,50.1633513 897.528631,50.0531916 897.558054,49.9467255 C897.576789,49.8789311 897.629759,49.8259614 897.697554,49.807226 L901.123269,48.8605043 C903.199028,48.2868531 904.808135,46.6447323 905.339517,44.5577523 L906.306184,40.7612051 C906.333439,40.6541634 906.442307,40.5894833 906.549349,40.6167379 C906.620324,40.6348094 906.675745,40.6902301 906.693816,40.7612051 L907.660483,44.5577523 C908.191865,46.6447323 909.800972,48.2868531 911.876731,48.8605043 L915.302446,49.807226 C915.408913,49.8366487 915.471369,49.9468084 915.441946,50.0532745 C915.423211,50.1210689 915.370241,50.1740386 915.302446,50.192774 Z"
          opacity=".7"
          transform="rotate(45 906.5 50)"
        />
        <path
          fill="#5A6399"
          fillRule="nonzero"
          d="M632.523515,47.1347189 L630.226548,47.7841514 C628.77666,48.1940852 627.657449,49.3492625 627.293564,50.8113869 L626.635856,53.4541184 C626.617183,53.5291495 626.54122,53.5748365 626.466189,53.5561632 C626.415912,53.5436507 626.376657,53.5043949 626.364144,53.4541184 L625.706436,50.8113869 C625.342551,49.3492625 624.22334,48.1940852 622.773452,47.7841514 L620.476485,47.1347189 C620.402082,47.1136825 620.358819,47.0363135 620.379856,46.9619103 C620.393091,46.9151004 620.429675,46.8785159 620.476485,46.8652811 L622.773452,46.2158486 C624.22334,45.8059148 625.342551,44.6507375 625.706436,43.1886131 L626.364144,40.5458816 C626.382817,40.4708505 626.45878,40.4251635 626.533811,40.4438368 C626.584088,40.4563493 626.623343,40.4956051 626.635856,40.5458816 L627.293564,43.1886131 C627.657449,44.6507375 628.77666,45.8059148 630.226548,46.2158486 L632.523515,46.8652811 C632.597918,46.8863175 632.641181,46.9636865 632.620144,47.0380897 C632.606909,47.0848996 632.570325,47.1214841 632.523515,47.1347189 Z"
        />
        <path
          fill="#5A6399"
          fillRule="nonzero"
          d="M1142.52352,222.134719 L1140.22655,222.784151 C1138.77666,223.194085 1137.65745,224.349263 1137.29356,225.811387 L1136.63586,228.454118 C1136.61718,228.529149 1136.54122,228.574837 1136.46619,228.556163 C1136.41591,228.543651 1136.37666,228.504395 1136.36414,228.454118 L1135.70644,225.811387 C1135.34255,224.349263 1134.22334,223.194085 1132.77345,222.784151 L1130.47648,222.134719 C1130.40208,222.113683 1130.35882,222.036313 1130.37986,221.96191 C1130.39309,221.9151 1130.42968,221.878516 1130.47648,221.865281 L1132.77345,221.215849 C1134.22334,220.805915 1135.34255,219.650737 1135.70644,218.188613 L1136.36414,215.545882 C1136.38282,215.470851 1136.45878,215.425163 1136.53381,215.443837 C1136.58409,215.456349 1136.62334,215.495605 1136.63586,215.545882 L1137.29356,218.188613 C1137.65745,219.650737 1138.77666,220.805915 1140.22655,221.215849 L1142.52352,221.865281 C1142.59792,221.886317 1142.64118,221.963687 1142.62014,222.03809 C1142.60691,222.0849 1142.57032,222.121484 1142.52352,222.134719 Z"
          opacity=".3"
        />
        <path
          fill="#5A6399"
          fillRule="nonzero"
          d="M321.302446,389.192774 L317.876731,390.139496 C315.800972,390.713147 314.191865,392.355268 313.660483,394.442248 L312.693816,398.238795 C312.666561,398.345837 312.557693,398.410517 312.450651,398.383262 C312.379676,398.365191 312.324255,398.30977 312.306184,398.238795 L311.339517,394.442248 C310.808135,392.355268 309.199028,390.713147 307.123269,390.139496 L303.697554,389.192774 C303.591087,389.163351 303.528631,389.053192 303.558054,388.946725 C303.576789,388.878931 303.629759,388.825961 303.697554,388.807226 L307.123269,387.860504 C309.199028,387.286853 310.808135,385.644732 311.339517,383.557752 L312.306184,379.761205 C312.333439,379.654163 312.442307,379.589483 312.549349,379.616738 C312.620324,379.634809 312.675745,379.69023 312.693816,379.761205 L313.660483,383.557752 C314.191865,385.644732 315.800972,387.286853 317.876731,387.860504 L321.302446,388.807226 C321.408913,388.836649 321.471369,388.946808 321.441946,389.053275 C321.423211,389.121069 321.370241,389.174039 321.302446,389.192774 Z"
        />
        <path
          fill="#5A6399"
          fillRule="nonzero"
          d="M1243.30245,205.192774 L1239.87673,206.139496 C1237.80097,206.713147 1236.19186,208.355268 1235.66048,210.442248 L1234.69382,214.238795 C1234.66656,214.345837 1234.55769,214.410517 1234.45065,214.383262 C1234.37968,214.365191 1234.32426,214.30977 1234.30618,214.238795 L1233.33952,210.442248 C1232.80814,208.355268 1231.19903,206.713147 1229.12327,206.139496 L1225.69755,205.192774 C1225.59109,205.163351 1225.52863,205.053192 1225.55805,204.946725 C1225.57679,204.878931 1225.62976,204.825961 1225.69755,204.807226 L1229.12327,203.860504 C1231.19903,203.286853 1232.80814,201.644732 1233.33952,199.557752 L1234.30618,195.761205 C1234.33344,195.654163 1234.44231,195.589483 1234.54935,195.616738 C1234.62032,195.634809 1234.67574,195.69023 1234.69382,195.761205 L1235.66048,199.557752 C1236.19186,201.644732 1237.80097,203.286853 1239.87673,203.860504 L1243.30245,204.807226 C1243.40891,204.836649 1243.47137,204.946808 1243.44195,205.053275 C1243.42321,205.121069 1243.37024,205.174039 1243.30245,205.192774 Z"
          transform="rotate(30 1234.5 205)"
        />
        <path
          fill="#5A6399"
          fillRule="nonzero"
          d="M953.523515 239.134719L951.226548 239.784151C949.77666 240.194085 948.657449 241.349263 948.293564 242.811387L947.635856 245.454118C947.617183 245.529149 947.54122 245.574837 947.466189 245.556163 947.415912 245.543651 947.376657 245.504395 947.364144 245.454118L946.706436 242.811387C946.342551 241.349263 945.22334 240.194085 943.773452 239.784151L941.476485 239.134719C941.402082 239.113683 941.358819 239.036313 941.379856 238.96191 941.393091 238.9151 941.429675 238.878516 941.476485 238.865281L943.773452 238.215849C945.22334 237.805915 946.342551 236.650737 946.706436 235.188613L947.364144 232.545882C947.382817 232.470851 947.45878 232.425163 947.533811 232.443837 947.584088 232.456349 947.623343 232.495605 947.635856 232.545882L948.293564 235.188613C948.657449 236.650737 949.77666 237.805915 951.226548 238.215849L953.523515 238.865281C953.597918 238.886317 953.641181 238.963687 953.620144 239.03809 953.606909 239.0849 953.570325 239.121484 953.523515 239.134719zM70.265603 80.7024486L66.651681 81.6986856C64.4716547 82.2996457 62.7809424 84.0229057 62.221655 86.2139934L61.2034758 90.2028546C61.1747911 90.3152312 61.0604383 90.3830769 60.9480617 90.3543921 60.8736367 90.3353947 60.8155216 90.2772796 60.7965242 90.2028546L59.778345 86.2139934C59.2190576 84.0229057 57.5283453 82.2996457 55.348319 81.6986856L51.734397 80.7024486C51.6225877 80.6716265 51.5569346 80.556001 51.5877567 80.4441917 51.6074088 80.3729023 51.6631076 80.3172035 51.734397 80.2975514L55.348319 79.3013144C57.5283453 78.7003543 59.2190576 76.9770943 59.778345 74.7860066L60.7965242 70.7971454C60.8252089 70.6847688 60.9395617 70.6169231 61.0519383 70.6456079 61.1263633 70.6646053 61.1844784 70.7227204 61.2034758 70.7971454L62.221655 74.7860066C62.7809424 76.9770943 64.4716547 78.7003543 66.651681 79.3013144L70.265603 80.2975514C70.3774123 80.3283735 70.4430654 80.443999 70.4122433 80.5558083 70.3925912 80.6270977 70.3368924 80.6827965 70.265603 80.7024486z"
          opacity=".5"
        />
      </g>
    </svg>
  )
}

export default SearchDocker
