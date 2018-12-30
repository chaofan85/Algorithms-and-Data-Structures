/*
https://leetcode.com/problems/merge-intervals/description/

Given a collection of intervals, merge all overlapping intervals.

Example 1:
Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Example 2:
Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/

var merge = function(intervals) {
  if (!intervals.length) return [];

  intervals = intervals.sort((a, b) => a.start - b.start);

  let result = [intervals[0]];

  for (let i = 0; i < intervals.length; i++) {
    let last = result[result.length - 1];
    if (last.start > intervals[i].start) {
      if (last.start > intervals[i].end) {
        let temp = result[result.length - 1];
        result[result.length - 1] = intervals[i];
        result.push(temp);
      } else {
        if (last.end > intervals[i].end) {
          last.start = intervals[i].start;
        } else {
          result[result.length - 1] = intervals[i];
        }
      }
    } else if (last.start <= intervals[i].start) {
      if (last.end >= intervals[i].start) {
        if (last.end < intervals[i].end) {
          last.end = intervals[i].end;
        }
      } else {
        result.push(intervals[i]);
      }
    }
  }

  return result;
};
