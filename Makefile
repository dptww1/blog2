.PHONY: deploy dev dry-run

DEST    = davetown@davetownsend.org:/home3/davetown/public_html
OPTIONS = --compress --exclude=Battles --human-readable --human-readable --progress --recursive --stats --times --verbose
SRC     = output/


dev: # show drafts
	bin/bridgetown start --unpublished

test: # hide drafts, so previews production
	bin/bridgetown start

deploy:
	rsync $(OPTIONS) $(SRC) $(DEST)

dry-run:
	rsync --dry-run $(OPTIONS) $(SRC) $(DEST)
