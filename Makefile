.PHONY: deploy dry-run

DEST    = davetown@davetownsend.org:/home3/davetown/public_html
OPTIONS = --compress --exclude=Battles --human-readable --human-readable --progress --recursive --stats --times --verbose
SRC     = output/

deploy:
	rsync $(OPTIONS) $(SRC) $(DEST)

dry-run:
	rsync --dry-run $(OPTIONS) $(SRC) $(DEST)
