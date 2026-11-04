-- Uno stile comune per tutte le tabelle, senza cambiare i contenuti Markdown.
local function colora_cella(cella, colore, intestazione)
	if intestazione then
		cella = cella:walk({
			Plain = function(blocco)
				return pandoc.Plain({pandoc.Strong(blocco.content)})
			end,
			Para = function(blocco)
				return pandoc.Para({pandoc.Strong(blocco.content)})
			end,
		})
	end
	local comando = '\\cellcolor{' .. colore .. '}'
	local primo = cella.contents[1]
	if primo and (primo.t == 'Plain' or primo.t == 'Para') then
		primo.content:insert(1, pandoc.RawInline('latex', comando))
	else
		cella.contents:insert(1, pandoc.RawBlock('latex', comando))
	end
	return cella
end

function Table(tabella)
	if not FORMAT:match('latex') then
		return nil
	end
	for _, riga in ipairs(tabella.head.rows) do
		for indice, cella in ipairs(riga.cells) do
			riga.cells[indice] = colora_cella(cella, 'TabellaIntestazione', true)
		end
	end
	local numero = 0
	for _, corpo in ipairs(tabella.bodies) do
		for _, riga in ipairs(corpo.head) do
			for indice, cella in ipairs(riga.cells) do
				riga.cells[indice] = colora_cella(cella, 'TabellaIntestazione', true)
			end
		end
		for _, riga in ipairs(corpo.body) do
			numero = numero + 1
			local colore = numero % 2 == 0 and 'TabellaRiga' or 'white'
			for indice, cella in ipairs(riga.cells) do
				riga.cells[indice] = colora_cella(cella, colore, false)
			end
		end
	end
	return tabella
end
