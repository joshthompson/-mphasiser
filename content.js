function setup() {
	const style = document.createElement('style')
	style.innerHTML = `
		.amphasiser {
			font-weight: bold;
			zoom: 1.2;
		}
	`
	document.head.appendChild(style)
	replaceLoop()
}

function replaceLoop() {
	document.querySelectorAll('*:not(.amphasiser)').forEach(element => {
		element.childNodes.forEach(node => {
			if (node.nodeType === Node.TEXT_NODE) {
				if (node.nodeValue.toLowerCase().includes('ä')) {
					highlight(element, node)
				}
			}
		})
	})

	setTimeout(replaceLoop, 2000)
}

function highlight(parent, node) {
	const newChild = document.createElement('span')
	newChild.innerHTML = node.nodeValue
		.replace(/Ä/g, '<span class="amphasiser">Ä</span>')
		.replace(/ä/g, '<span class="amphasiser">ä</span>')
	parent.insertBefore(newChild, node)
	node.remove()
}

setup()
