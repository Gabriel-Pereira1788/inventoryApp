import * as S from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Circle, G, Path} from 'react-native-svg';

export default function BottomExample() {
  const state = {
    pathX: '357',
    pathY: '675',
    pathA: '689',
    pathB: '700',
  };
  return (
    <S.HStack flex={1} width="100%" position="absolute" bottom={0}>
      <Svg
        height="100"
        width="100%"
        viewBox="0 0 1092 280"
        preserveAspectRatio="xMidYMid slice">
        <Path
          d="M 0 10 C 20 60, 80 60, 100 10 L 100 100 L 0 100 Z"
          fill="#fff"
        />
        <G>
          <Circle cx="50%" cy="35" r="40" fill="#0080ff" />
        </G>
      </Svg>
    </S.HStack>
  );
}

// preserveAspectRatio="xMidYMid slice"

// <Svg
// version="1.1"
// id="bottom-bar"
// x="0px"
// y="0px"
// width="100%"
// height="100"
// viewBox="0 0 1092 260"
// space="preserve"
// >
// <Path
//   fill={"#373A50"}
//   stroke={"#373A50"}
//   d={`M30,60h${this.state.pathX}.3c17.2,0,31,14.4,30,31.6c-0.2,2.7-0.3,5.5-0.3,8.2c0,71.2,58.1,129.6,129.4,130c72.1,0.3,130.6-58,130.6-130c0-2.7-0.1-5.4-0.2-8.1C${this.state.pathY}.7,74.5,${this.state.pathA}.5,60,${this.state.pathB}.7,60H1062c16.6,0,30,13.4,30,30v94c0,42-34,76-76,76H76c-42,0-76-34-76-76V90C0,73.4,13.4,60,30,60z`}
// />
// <Circle
//   fill={"#7EE6D2"}
//   stroke={"#7EE6D2"}
//   cx="546"
//   cy="100"
//   r="100"
// />
// </Svg>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
