import  { useCallback } from 'react'
import { Degree, DegreeList, Specialization, SpecializationList, State, StateList, Stream, StreamList } from './formData';
import useSorting from '@/hooks/useSorting';

const UseCollegesFormData = () => {
  const sortedCourse = ['pg', 'ug', 'cbse', 'chse', 'other'];
  const sortedStudyMode = ['fulltime', 'parttime'];
  const sortedOwnerShip = ['government', 'private']
  const uniqueStatesSet = new Set(StateList.map(item => item.state));
  const uniqueStatesArray = Array.from(uniqueStatesSet).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

  const { data: sortedStreamList } = useSorting(StreamList, useCallback((a: Stream, b: Stream) => a.name.localeCompare(b.name), []))
  const { data: sortedDegreeList } = useSorting(DegreeList, useCallback((a: Degree, b: Degree) => a.name.localeCompare(b.name), []))
  const { data: sortedSpecializationList } = useSorting(SpecializationList, useCallback((a: Specialization, b: Specialization) => a.name.localeCompare(b.name), []));
  const { data: CityLists } = useSorting(StateList, useCallback((a: State, b: State) => a.name.localeCompare(b.name), []));

  const uniqueCitySet = new Set(CityLists.map(item => item.name));
  const sortedCityList = Array.from(uniqueCitySet).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  const sortedBoardList = ['chse', 'cbse'].sort();

  const soretdCoachingList = ['NEET', 'JEE', '+2 Science', '+2 Arts', 'Railway', 'SSC', 'Banking'].sort();

  return {
    sortedCourse, sortedStudyMode, sortedOwnerShip, uniqueStatesArray, sortedStreamList, sortedDegreeList, sortedSpecializationList, sortedCityList, sortedBoardList,soretdCoachingList
  };
}

export default UseCollegesFormData;




