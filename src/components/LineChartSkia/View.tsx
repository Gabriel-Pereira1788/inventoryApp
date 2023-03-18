import {SkPath} from '@shopify/react-native-skia';
import React from 'react';
import {DataPoint} from './Data';

type Props = {};

interface GraphData {
  min: number;
  max: number;
  curve: SkPath;
}

export default function LineChartSkia({}: Props) {
  const GRAPH_HEIGHT = 400;
  const GRAPH_WIDTH = 370;

  const makeGraph = (data: DataPoint[]): GraphData => {
    const min = Math.min(...data.map(val => val.value));
    const max = Math.max(...data.map(val => val.value));
  };
  return <></>;
}
