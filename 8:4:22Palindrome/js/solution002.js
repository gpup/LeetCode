//Apparently this bullshit works?! WTF

var isPalindrome = function(head) {
    let slow = head;
    let fast = head;
    const stack = [];
    while(fast) {
        if(!fast.next) {
            slow = slow.next;
            break;
        }
        stack.push(slow.val)
        slow = slow.next;
        fast = fast.next.next;
    }
    while(slow) {
        if(stack.pop() != slow.val) return false;
        slow = slow.next;
    }
    return true;
};