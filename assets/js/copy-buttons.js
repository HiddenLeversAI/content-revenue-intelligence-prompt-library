// Copy button functionality for prompts
(function() {
    'use strict';
    
    function createCopyButton(codeBlock) {
        var button = document.createElement('button');
        button.className = 'copy-btn';
        button.textContent = 'Copy Prompt';
        button.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background-color: #BDDDDF;
            color: #0D0736;
            border: none;
            padding: 6px 12px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 600;
            cursor: pointer;
            font-family: Helvetica, Arial, sans-serif;
            z-index: 10;
        `;
        
        button.addEventListener('click', function() {
            copyToClipboard(codeBlock.textContent);
        });
        
        button.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#0D0736';
            this.style.color = 'white';
        });
        
        button.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#BDDDDF';
            this.style.color = '#0D0736';
        });
        
        return button;
    }
    
    function copyToClipboard(text) {
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text).then(function() {
                showNotification();
            }).catch(function() {
                fallbackCopy(text);
            });
        } else {
            fallbackCopy(text);
        }
    }
    
    function fallbackCopy(text) {
        var textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            document.execCommand('copy');
            showNotification();
        } catch (err) {
            console.error('Copy failed:', err);
        }
        
        document.body.removeChild(textArea);
    }
    
    function showNotification() {
        var notification = document.createElement('div');
        notification.textContent = '✓ Copied to clipboard!';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: #0D0736;
            color: white;
            padding: 10px 15px;
            border-radius: 6px;
            z-index: 1000;
            font-size: 14px;
            font-family: Inter, sans-serif;
            box-shadow: 0 4px 12px rgba(13, 7, 54, 0.3);
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(function() {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 2000);
    }
    
    function addCopyButtons() {
        var codeBlocks = document.querySelectorAll('pre code');
        
        codeBlocks.forEach(function(codeBlock) {
            var pre = codeBlock.parentElement;
            
            // Make sure the pre element is positioned relative
            pre.style.position = 'relative';
            
            // Check if button already exists
            if (!pre.querySelector('.copy-btn')) {
                var copyButton = createCopyButton(codeBlock);
                pre.appendChild(copyButton);
            }
        });
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addCopyButtons);
    } else {
        addCopyButtons();
    }
    
    // Also try after a short delay in case of dynamic content
    setTimeout(addCopyButtons, 1000);
})();