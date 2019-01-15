class Solution:
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """

        max = 0
        visited = set()
        queue = []
        count = 0
        for char in s:
            if not s or char not in visited:
                queue.append(char)
                visited.add(char)
                count += 1
                if count > max:
                    max = count
            elif char in visited:
                while char in visited:
                    first = queue.pop(0)
                    visited.remove(first)
                    count -= 1
                queue.append(char)
                visited.add(char)
                count += 1
                if count > max:
                    max = count

        return max

