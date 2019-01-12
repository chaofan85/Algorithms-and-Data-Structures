def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        
        hash = {}
        i = 0
        while i < len(nums):
          compli = target - nums[i]
          if compli in hash:
            return [min(i, hash[compli]), max(i, hash[compli])]
          else:
            hash[nums[i]] = i
          i += 1
            
        return []